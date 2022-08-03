const mongoose = require('mongoose');
const Schema = mongoose.Schema;
mongoose.connect('mongodb://localhost/memorandum');
const userSchema = new Schema({
	title:{
		type: String,
		require: true 
	},
	event: {
		type: String,
		require: true 
	},
	date: {
		type: String,
		require: true,
        default:Date.now
	},
	others: {
		type: String
	}
});
const Memorandum= mongoose.model('Memorandum', userSchema);
// Memorandum.find((err,ret)=>{console.log(ret)})
// const memorandum=new Memorandum();
module.exports.Constructor= Memorandum;
// module.exports.add=memorandum.save;
module.exports.remove=Memorandum.remove.bind(Memorandum);
module.exports.update=Memorandum.findByIdAndUpdate.bind(Memorandum);
module.exports.find=Memorandum.find.bind(Memorandum);