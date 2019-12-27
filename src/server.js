import app from './app';

app.listen(3001, () => {
  console.log(`Servidor rodando na porta ${process.env.PORT || 3001}`);
});
