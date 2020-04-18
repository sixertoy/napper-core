const { NODE_ENV } = (process && process.env) || {};

const isProduction = () => NODE_ENV === 'production';

export default isProduction;
