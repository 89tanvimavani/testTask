const BaseUrl = 'http://codexalters-techlabs.com/';

export const getApi = async endPoint => {
  const headers = {
    method: 'GET',
    redirect: 'follow',
  };

  const url = BaseUrl + endPoint;
  try {
    const response = await fetch(url, headers);

    if (!response.ok) {
      throw new Error('Network response was not ok');
    }

    const responseData = await response.json();
    return responseData;
  } catch (error) {
    throw error;
  }
};
