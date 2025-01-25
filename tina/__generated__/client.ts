import { createClient } from "tinacms/dist/client";
import { queries } from "./types";
export const client = createClient({ url: '/api/tina/gql', token: '58f5aee97e831109cfb277efd4e55ec3294a945e', queries,  });
export default client;
  