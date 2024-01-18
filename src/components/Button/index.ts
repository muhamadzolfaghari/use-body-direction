type Row = Record<string, number>;

function queryResult<
  OnlyFirst extends boolean,
  Return extends OnlyFirst extends true ? Row : Row[]
>(onlyFirst: OnlyFirst): Return {
  const rows: Row[] = [{ id: 1 }, { id: 2 }];

  if (onlyFirst) {
    return rows[0] as Return;
  }

  return rows as Return;
}

const rows = queryResult(false);
const row = queryResult(true);


console.log(rows);
console.log(row);


export { default } from "./Button";


type ConditionalType<
  T,
> = T extends boolean ? number : string;

const myValue: ConditionalType<boolean> = 10;
