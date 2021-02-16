import * as H from "history";
import { User } from "@saleor/sdk/lib/fragments/gqlTypes/User";

export interface IProps {
  user: User;
  history: H.History;
}
