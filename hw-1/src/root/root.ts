// Здесь необходимо продемонстрировать создание и использование GitHubStore

import GitHubStore from '../store/GitHubStore/GitHubStore';
import App from "../App";

const gitHubStore = new GitHubStore();

const EXAMPLE_ORGANIZATION = 'ktsstudio';

const getOrganizationReposList = () => gitHubStore.getOrganizationReposList({
    organizationName: EXAMPLE_ORGANIZATION
}).then(result => {
    console.log(result.data); // в консоли появится список репозиториев в ktsstudio
})

export default getOrganizationReposList;


// В ДЗ 1 Не требуется визуально в разметке отображать результат запроса к сети. Достаточно вывести в console.log
