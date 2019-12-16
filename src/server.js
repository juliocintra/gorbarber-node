import app from './app';

app.listen(3000, () => {
  console.log(`Servidor rodando na porta ${process.env.PORT || 3000}`);
});
