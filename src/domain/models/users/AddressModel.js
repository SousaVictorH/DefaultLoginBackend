module.exports = (address) => {
  const street = address.street;
  const city = address.city;
  const zipCode = address.zipCode;
  const district = address.district;
  const complement = address.complement;
  const uf = address.uf;
  const number = address.number;

  return {
    street,
    city,
    zipCode,
    district,
    complement,
    uf,
    number,
  };
};
