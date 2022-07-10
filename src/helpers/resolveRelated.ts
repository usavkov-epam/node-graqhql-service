export const resolveRelated = (promises) => {
  return Promise.allSettled(promises)
    .then((res) => res.map((item) => (item as PromiseFulfilledResult<any>).value))
};
