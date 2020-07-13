import mongoose from '../database'

const PlanSchema = new mongoose.Schema({
  name: {
    type: String,
    unique: true,
    required: true,
  },
  minutes: {
    type: Number,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
})

const Plan = mongoose.model('Plan', PlanSchema)
export default Plan
