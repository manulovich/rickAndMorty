const getDataApi = async (url: string) => {
    let response: Response = await fetch(url);
    response = await response.json();

    return response;
}

export default getDataApi;