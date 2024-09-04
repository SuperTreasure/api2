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
}
