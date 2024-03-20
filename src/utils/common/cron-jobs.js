const cron = require('node-cron');

const { EmailService } = require('../../services');

function scheduleCrons() {
    cron.schedule('*/2 * * * *', async () => {
        await EmailService.cancelOldBookings();
    });
}

module.exports = scheduleCrons;