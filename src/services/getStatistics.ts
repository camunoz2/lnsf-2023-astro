import type { Stats } from "../models/stats";

const query = {
  method: "POST",
  headers: { "Content-Type": "application/json" },
  body: JSON.stringify({
    query: `
        {
          statistics {
            id
            statName
            statQuantity
          }
          config(where: {id: "cle00dunc3ikr0bkm271oym1e"}) {
            id
            schoolName
            phone
            address
            workingHours
            institutionalSeals
          }
        }`,
  }),
};

const response = await fetch(import.meta.env.HYGRAPH_ENDPOINT, query);
const json = await response.json();
const stats: Stats[] = json.data.statistics;

export { stats };
