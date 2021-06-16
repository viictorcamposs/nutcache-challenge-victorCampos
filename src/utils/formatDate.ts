interface IFormatDateData {
  data: Date;
  iso: string;
  format: string;
}

export default (timestamp: string | Date): IFormatDateData => {
  const date = new Date(timestamp);

  const year = date.getUTCFullYear();
  const month = `0${date.getUTCMonth() + 1}`.slice(-2);
  const day = `0${date.getUTCDate()}`.slice(-2);

  return {
    data: date,
    iso: `${year}-${month}-${day}`,
    format: `${day}/${month}/${year}`,
  };
};
