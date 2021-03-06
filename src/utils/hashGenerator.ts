type HashType = (s: any) => string

const hashCode: HashType = s => s.split('').reduce((a, b) => { a = ((a << 5) - a) + b.charCodeAt(0); return a & a }, 0)

export default hashCode;
