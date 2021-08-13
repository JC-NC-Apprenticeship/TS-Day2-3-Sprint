function isNil(arg: string): boolean {
  if (arg === null) return true;
  if (arg === undefined) return true;
  return false;
}

export default isNil;
