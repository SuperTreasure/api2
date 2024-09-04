import { Utils } from 'src/router/utils';

export class Douyu extends Utils {
  async directory() {
    const url = 'https://www.douyu.com/directory';

    const response = await fetch(url, {
      method: 'GET',
      headers: this.Headers,
    });
    const content = await response.text();

    const regex = /<script type="text\/javascript">var \$DATA = (.*?);/s;
    const data = content.match(regex);

    return JSON.parse(data[1]);
  }

  async directoryMixList(cid2: number, page: number) {
    const url = `https://www.douyu.com/gapi/rknc/directory/mixListV1/2_${cid2}/${page}`;

    const response = await fetch(url, {
      method: 'GET',
      headers: this.Headers,
    });
    const data = await response.json();

    return data;
  }

  async search(
    keyword: string,
    page: number,
    pageSize: number,
    filterType: number,
  ) {
    const url = `https://www.douyu.com/japi/search/api/searchUser?kw=${keyword}&page=${page}&pageSize=${pageSize}&filterType=${filterType}`;

    const response = await fetch(url, {
      method: 'GET',
      headers: this.Headers,
    });
    const data = await response.json();

    return data;
  }
}
