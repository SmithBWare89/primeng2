import echelonApiItems from "./echelonApiItems";

export default interface echelonApiResponse{
    total: number,
    page: number,
    limit: number,
    items: echelonApiItems[]
}