import mongoose from 'mongoose'

mongoose.connect(
  'mongodb+srv://telzir_user:mXf4nY9FTKTCnqQh@telzir-api.wlqir.gcp.mongodb.net/dbTelzir?retryWrites=true&w=majority',
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
  },
)

export default mongoose
