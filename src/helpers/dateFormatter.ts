const formatter = Intl.DateTimeFormat;

const dateFormatter = (date: string | undefined, locale: string) => {
  if (date != undefined) {
    return formatter(locale).format(new Date(date))
  }

  return '';
};

export default dateFormatter;
