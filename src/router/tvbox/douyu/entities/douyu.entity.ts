import { Utils } from '../../../utils';

const DID = '10000000000000000000000000001501';

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

  async betard(rid: string) {
    const url = `https://www.douyu.com/betard/${rid}`;

    const response = await fetch(url, {
      method: 'GET',
      headers: this.Headers,
    });
    const data = await response.json();

    return data;
  }

  async streamUrl(rid: string, cdn: string, rate: number) {
    const homeH5EncUrl = `https://www.douyu.com/swf_api/homeH5Enc?rids=${rid}`;
    const getH5PlayUrl = `https://www.douyu.com/lapi/live/getH5Play/${rid}`;

    const response = await fetch(homeH5EncUrl, {
      method: 'GET',
      headers: this.Headers,
    });
    const jsJson = await response.json();
    let h5Enc = Object.values(jsJson.data)[0] as string;
    h5Enc = h5Enc.replace(/eval.*?;}/g, 'strc;}');
    const h5EncFunc = new Function(h5Enc + 'return {ub98484234};')();

    let signJs = h5EncFunc.ub98484234(0, 0, 0);
    signJs = signJs.replace(/return rt;}\)/g, 'return rt;}');
    signJs = signJs.replace('(function ', 'function sign');
    const v = signJs.match(/v=(\d+)/)[1];
    const tt = Math.floor(Date.now() / 1000);
    const rb = this.md5(`${rid}${DID}${tt}${v}`);
    signJs = signJs.replace('CryptoJS.MD5(cb).toString()', `'${rb}'`);
    const signFunc = new Function(signJs + 'return {sign};')();

    let sign = signFunc.sign(rid, DID, tt);
    const params = `${sign}&cdn=${cdn}&rate=${rate}`;
    const headers = { ...this.Headers };
    headers['Content-Type'] =
      'application/x-www-form-urlencoded;charset=utf-8;';

    const response2 = await fetch(getH5PlayUrl, {
      method: 'POST',
      headers: headers,
      body: params,
    });
    const data = await response2.json();

    return data;
  }
}
