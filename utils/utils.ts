export const middleEllipsis = (text: string, start = 9, end = 9) => {
    return `${text.slice(0, start)}...${text.slice(Number(`-${end}`))}`;
  };
  
  export const endEllipsis = (text: string, total = 18) => {
    return `${text.slice(0, total)}...`;
  };
  