import echelonApiItems from "./echelonAPIItems";

export default interface echelonApiResponse{
    total: number,
    page: number,
    limit: number,
    items: echelonApiItems[]
}