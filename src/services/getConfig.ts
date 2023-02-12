import type { Config } from "../models/config";

const query = {
  method: "POST",
  headers: { "Content-Type": "application/json" },
  body: JSON.stringify({
    query: `
        {
          config(where: {id: "cle00dunc3ikr0bkm271oym1e"}) {
            id
            schoolName
            phone
            address
            workingHours
            institutionalSeals
            instagram
            facebook
          }
        }`,
  }),
};

const response = await fetch(import.meta.env.HYGRAPH_ENDPOINT, query);
const json = await response.json();
const config: Config = json.data.config;

export { config };
