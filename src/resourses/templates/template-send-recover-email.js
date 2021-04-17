module.exports = token => ({
  subject: 'Recuperação de senha',
  text: `Olá, seu código de recuperação de senha é: ${token}`,
});
