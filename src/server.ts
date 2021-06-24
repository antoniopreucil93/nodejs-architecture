import 'reflect-metadata';
import app from './main';

app.listen(process.env.PORT, () => {
	console.log('server listening on port ', process.env.PORT);
});
