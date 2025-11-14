import 'dotenv/config';
import { setupServer } from './server.js';

const app = setupServer();

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
