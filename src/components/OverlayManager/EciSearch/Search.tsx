import "./scss/index.scss";

import classNames from "classnames";
import { stringify } from "query-string";
import * as React from "react";
import {
  injectIntl,
  WrappedComponentProps,
  FormattedMessage,
} from "react-intl";
import { RouteComponentProps, withRouter } from "react-router-dom";
import ReactSVG from "react-svg";

import { commonMessages } from "@temp/intl";

import { eciHost, eciAccount, eciDebug } from "@temp/constants";
import {
  Button,
  Loader,
  OfflinePlaceholder,
  Overlay,
  OverlayContextInterface,
  OverlayType,
} from "../..";
import { searchUrl } from "../../../app/routes";
import { maybe, eciCallApi } from "../../../core/utils";
import { DebouncedTextField } from "../../Debounce";
import { Error } from "../../Error";
import NetworkStatus from "../../NetworkStatus";
import NothingFound from "./NothingFound";
import ProductItem from "./ProductItem";

import searchImg from "../../../images/search.svg";
import closeImg from "../../../images/x.svg";

interface SearchProps extends WrappedComponentProps, RouteComponentProps {
  overlay: OverlayContextInterface;
}

interface SearchState {
  search: string;
  suggest: any;
  keyPosition: number;
}

class Search extends React.Component<SearchProps, SearchState> {
  state = { search: "", suggest: "", keyPosition: -1 };

  submitBtnRef = React.createRef<HTMLButtonElement>();

  inputRef = React.createRef<HTMLInputElement>();

  suggestValue = "";

  // componentDidMount() {
  //   // EC Intelligence サジェスト設定
  //   window._scq.push(["_setDebug", eciDebug]);
  //   window._scq.push(["_suggest", { input: "suggest", item: true }]);
  //   window._scq.push(["_trackPageview"]);
  // }

  componentDidMount() {
    document.addEventListener("keydown", this.handleKeyDown);
  }

  componentDidUpdate(_prevProps: SearchProps, prevState: SearchState) {
    if (
      !!prevState.search.length &&
      this.props.overlay.type !== OverlayType.search
    ) {
      this.setState({ search: "", suggest: "", keyPosition: 0 });
    }

    if (prevState.search !== this.state.search) {
      this.callApi();
    }
  }

  componentWillUnmount() {
    document.removeEventListener("keydown", this.handleKeyDown);
  }

  get hasSearchPhrase() {
    return this.state.search.length > 0;
  }

  get redirectTo() {
    return { pathname: searchUrl, search: `?${this.searchQs}` };
  }

  get searchQs() {
    return stringify({ q: this.state.search });
  }

  handleKeyDown = (e: KeyboardEvent) => {
    const wordsLength =
      this.state.suggest !== "" ? this.state.suggest.response.length : 0;
    if (wordsLength > 0) {
      switch (e.key) {
        case "ArrowUp":
          if (this.state.keyPosition > -1) {
            if (this.state.keyPosition !== -1) {
              this.suggestValue = this.state.suggest.response[
                this.state.keyPosition - 1
              ].words;
              this.setState(prevState => ({
                keyPosition: prevState.keyPosition - 1,
              }));
            }
          }
          break;

        case "ArrowDown":
          if (this.state.keyPosition < wordsLength - 1) {
            this.suggestValue = this.state.suggest.response[
              this.state.keyPosition + 1
            ].words;
            this.setState(prevState => ({
              keyPosition: prevState.keyPosition + 1,
            }));
          }
          break;

        case "Enter":
          this.suggestValue = this.state.suggest.response[
            this.state.keyPosition
          ].words;
          this.setState(prevState => ({
            search: prevState.suggest.response[prevState.keyPosition].words,
          }));
          break;

        default:
          break;
      }
    }
  };

  hasResults = (data: SearchResults) =>
    maybe(() => !!data.products.edges.length);

  handleSubmit = (evt: React.FormEvent) => {
    this.state.search = this.inputRef.current.value;
    // if (this.hasSearchPhrase && this.submitBtnRef.current) {
    if (this.hasSearchPhrase) {
      this.props.overlay.hide();
      this.props.history.push(`${searchUrl}?${this.searchQs}`);
    }

    evt.preventDefault();
  };

  handleInputBlur = () => {
    if (!this.hasSearchPhrase) {
      this.props.overlay.hide();
    }
  };

  callApi = async () => {
    let url = `//${eciHost}/scinable/suggest?aid=${eciAccount}&t=k&i=true&h=false`;
    if (this.state.search) {
      url += `&q=${this.state.search}`;
    }
    const result = await eciCallApi(url);
    this.setState({ suggest: result });
  };

  handleClickSuggest = evt => {
    this.suggestValue = evt.target.innerText;
    this.setState({ search: evt.target.innerText });
  };

  handleWordKeyDown = evt => {
    console.log(evt.target.innerText);
  };

  render() {
    return (
      <Overlay
        testingContext="searchOverlay"
        context={this.props.overlay}
        className="overlay--no-background"
      >
        <form
          className={classNames("search", {
            "search--has-results": this.hasSearchPhrase,
          })}
          onClick={e => e.stopPropagation()}
          onSubmit={this.handleSubmit}
        >
          <div className="search__input">
            <DebouncedTextField
              onChange={evt => {
                this.suggestValue = "";
                this.setState({ search: evt.target.value });
              }}
              value={this.state.search}
              iconLeft={
                <ReactSVG
                  path={closeImg}
                  onClick={this.props.overlay.hide}
                  className="search__input__close-btn"
                />
              }
              iconRight={
                <ReactSVG path={searchImg} onClick={this.handleSubmit} />
              }
              autoFocus
              placeholder={this.props.intl.formatMessage(commonMessages.search)}
              onBlur={this.handleInputBlur}
              inputRef={this.inputRef}
              id="suggest"
              name="suggest"
              setValue={this.suggestValue}
            />
          </div>
          <div
            className={classNames({
              search__products: true,
              "search__products--expanded": this.hasSearchPhrase,
            })}
          >
            <NetworkStatus>
              {isOnline => {
                if (this.hasSearchPhrase) {
                  if (this.state.suggest) {
                    if (
                      this.state.suggest.response.length > 0 ||
                      this.state.suggest.items.length > 0
                    ) {
                      return (
                        <>
                          <ul>
                            {this.state.suggest.response.map((key, index) => {
                              return (
                                <li
                                  className={
                                    this.state.keyPosition === index
                                      ? "search__suggest__word search__suggest__word__select"
                                      : "search__suggest__word"
                                  }
                                  key={key.words}
                                  onClick={this.handleClickSuggest}
                                  onKeyDown={this.handleWordKeyDown}
                                >
                                  {key.words}
                                </li>
                              );
                            })}
                          </ul>
                          <ul>
                            {this.state.suggest.items.map(product => {
                              return (
                                <ProductItem {...product} key={product.id} />
                              );
                            })}
                          </ul>
                        </>
                      );
                    }
                    return <NothingFound search={this.state.search} />;
                  }
                  // if (error) {
                  //   return isOnline ? (
                  //     <Error error={error.message} />
                  //   ) : (
                  //     <OfflinePlaceholder />
                  //   );
                  // }
                }
                return null;
              }}
            </NetworkStatus>
          </div>
        </form>
      </Overlay>
    );
  }
}

// Workaround ATM for:
// withRouter(Search): Function components do not support contextType
export default injectIntl(
  withRouter(
    (
      props: WrappedComponentProps &
        RouteComponentProps & { overlay: OverlayContextInterface }
    ) => <Search {...props} />
  )
);
