const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  otp: {
    type: String,
  },
  otpExpiry: {
    type: Date,
  },
  walletAddress: {
    type: String,
    unique: true,
  },
  // Add other user-related fields (e.g., address, phone number, etc.) as needed
});

const User = mongoose.model('User', userSchema);
