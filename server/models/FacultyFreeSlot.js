import mongoose from 'mongoose';

const facultyFreeSlotSchema = new mongoose.Schema({
  facultyId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Faculty',   // Link to Faculty model
    required: true,
  },
  freeSlot: {
    type: Object,     // Example: { "2025-10-28": { "10-11": true, "11-12": false } }
    required: true,
  },
  updatedAt: {
    type: Date,
    default: Date.now,
  },
});

const FacultyFreeSlot = mongoose.model('FacultyFreeSlot', facultyFreeSlotSchema);
export default FacultyFreeSlot;
