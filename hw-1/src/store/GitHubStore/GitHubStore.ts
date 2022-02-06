import ApiStore from '../../shared/store/ApiStore';
import {HTTPMethod} from '../../shared/store/ApiStore/types';
import {ApiResp, GetOrganizationReposListParams, IGitHubStore, RepoItem} from "./types";

export default class GitHubStore implements IGitHubStore {
    private readonly apiStore = new ApiStore('https://api.github.com'); // TODO: не забудьте передать baseUrl в конструктор

    // TODO: реализовать интерфейс IGitHubStore

    async getOrganizationReposList(params: GetOrganizationReposListParams): Promise<ApiResp<RepoItem[]>> {
        // TODO: Здесь сделайте вызов из this.apiStore и верните результат
        // Документация github: https://docs.github.com/en/rest/reference/repos#list-organization-repositories

        try {
            const data = await this.apiStore.request({
                method: HTTPMethod.GET,
                data: {},
                headers: {},
                endpoint: `/orgs/${params.organizationName}/repos`
            })

            return {
                data: data.data,
                status: data.status.toString()
            }

        } catch (error) {
            console.log(error)
            return {
            }
        }
    }
}
