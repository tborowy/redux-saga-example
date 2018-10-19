export const RANDOM_CAT = 'RANDOM_CAT';
export const GET_RANDOM_CAT = 'GET_RANDOM_CAT';
export const GET_RANDOM_CAT_ERROR = 'GET_RANDOM_CAT_ERROR';


export function getRandomCat() {
  return {type:GET_RANDOM_CAT};
}