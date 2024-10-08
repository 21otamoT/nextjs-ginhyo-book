//TODO: typesは後ほど定義ｓ
import { fetcher } from "../../utils";
import { ApiContext, User } from "@/types/data";

export type SigninParams = {
  username: string;
  password: string;
};

const signin = async (
  context: ApiContext,
  params: SigninParams
): Promise<User> => {
  return fetcher(`${context.apiRootUrl.replace(/\/$/g, "")}/auth/signin`, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(params),
  });
};

export default signin;
