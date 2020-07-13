import mongoose from 'mongoose'

const PriceDDDSchema = new mongoose.Schema({
  origin: {
    type: String,
    required: true,
  },
  destiny: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
})

// O mongoDB não tem um tipo de dados para monetários. Sendo assim a orientação é para armarzenar em centevos, então quando recuperamos o valor, dividiamos por 100 e quando setamos um novo valor, multiplcamos por 100
PriceDDDSchema.path('price').get(function (num) {
  return (num / 100).toFixed(2)
})

PriceDDDSchema.path('price').set(function (num) {
  return num * 100
})

const PriceDDD = mongoose.model('PriceDDD', PriceDDDSchema)
export default PriceDDD
