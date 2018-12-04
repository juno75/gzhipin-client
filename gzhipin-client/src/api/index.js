

import ajax from './ajax';

const prefix = '';

export const reqRegister = data => ajax(`${prefix}/register`,data,'POST');
export const reqLogin = data => ajax(`${prefix}/login`,data,'POST');