import mongoose, { Document, Schema, Model } from 'mongoose';

export interface ITask extends Document {
  title: string;
  description?: string;
  completed: boolean;
  owner: mongoose.Types.ObjectId;
  createdAt: Date;
  lastUpdatedAt?: Date;
}

const taskSchema: Schema<ITask> = new Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
  },
  completed: {
    type: Boolean,
    default: false,
  },
  owner: {
    type: Schema.Types.ObjectId,
    required: true,
    ref: 'User',
  },
  createdAt: {
    type: Date,
    required: true,
    default: Date.now,
  },
  lastUpdatedAt: {
    type: Date,
  },
});

const Task: Model<ITask> = mongoose.model<ITask>('Task', taskSchema);

export default Task;
