const nodemailer = require('nodemailer');
const { emailConfig } = require('../../resourses');

const transporter = nodemailer.createTransport(emailConfig);

module.exports = transporter;
