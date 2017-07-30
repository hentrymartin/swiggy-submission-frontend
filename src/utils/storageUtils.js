import { Cookies } from 'react-cookie';

export const setItem = (item, value) => {
  const date = new Date();
  const timed = date.setTime(date.getTime()+(365 * 24 * 60 * 60 * 1000));
  return new Cookies().set(item, value, {
    path: '/',
    expires: date,
  });
};

export const removeItem = (item) => {
  return new Cookies().remove(item, {
    path: '/',
  });
};

export const getItem = (item) => {
  const date = new Date();
  const timed = date.setTime(date.getTime()+(365 * 24 * 60 * 60 * 1000));
  const result = new Cookies().get(item, {
    path: '/',
    expires: date,
  });
  if (!result || result === 'undefined') return null;
  return result;
};