const getDataApi = async (url: string) => {
    let response: Response = await fetch(url);
    let data = await response.json();

    return data;
}

export default getDataApi;