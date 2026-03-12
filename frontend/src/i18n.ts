import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

export const resources = {
    en: {
        translation: {
            // Layout
            dashboard: 'Dashboard',
            about: 'About',
            history: 'History',
            settings: 'Settings',
            schoolName: 'Sri Vidya School',
            signOut: 'Sign Out',

            // Dashboard
            welcome: 'Welcome',
            greeting: 'Your contribution today helps build a brighter future for our students.',
            totalDonations: 'Total Donations',
            lastDonation: 'Last Donation',
            noDonationsYet: 'No donations yet',
            makeDonation: 'Make a Donation',
            donateNow: 'Donate Now',
            recentDonations: 'Recent Donations',
            noDonationsMessage: 'No donations yet. Make your first donation!',

            // Donation Modal
            chooseAmount: 'Choose Amount & Pay',
            processingPayment: 'Processing Payment',
            donationSuccessful: 'Donation Successful',
            donationAmount: 'Donation Amount',
            payUsing: 'Pay using',
            payUsingUpi: 'All UPI Apps / QR Code',
            securedBy: 'SECURED BY RAZORPAY',
            qrNote: 'Note: For QR Code, select "UPI" in the payment window',
            testModeNote: 'Please use Domestic Cards or UPI for testing. International cards are currently restricted.',
            contacting: 'Contacting',
            securingPayment: 'Securing your payment of Rs.',
            donationConfirmed: 'Donation Confirmed!',
            contributionMessage: 'Your contribution of',
            processedSuccessfully: 'has been processed successfully via',
            receiptId: 'Receipt ID',
            done: 'Done',
            enterValidAmount: 'Please enter a valid amount first',
            paymentInitFailed: 'Payment initialization failed',
            donationFailed: 'Donation failed. Please try again.',
            thankYou: 'Thank you for your donation!',
            verificationFailed: 'Failed to verify donation. Please contact support.',

            // Settings
            notificationPreferences: 'Notification Preferences',
            monthlyReminders: 'Monthly Donation Reminders',
            monthlyRemindersDesc: 'Receive reminders to make your monthly donation',
            smsReminders: 'SMS Reminders',
            smsRemindersDesc: 'Receive reminders via SMS on your mobile',
            phoneNumber: 'Phone Number for Reminders',
            enterPhone: 'Enter your 10-digit mobile number',
            sendTestEmail: 'Send Test Email',
            sendTestSms: 'Send Test SMS',
            sending: 'Sending...',
            note: 'Note',
            noteDesc: 'When enabled, you will receive a reminder notification one month after your last donation. This helps you maintain regular contributions to the school.',
            saveChanges: 'Save Changes',
            settingsSaved: 'Settings saved successfully!',
            settingsSaveFailed: 'Failed to save settings',
            language: 'Language',
            languageDesc: 'Select your preferred language',
            testSentMock: 'Test {{type}} sent in MOCK mode! Check the server console for details.',
            testSentSuccess: 'Test {{type}} sent successfully! Check your {{dest}}.',
            testFailed: 'Failed to send test {{type}}',

            // History
            donationHistory: 'Donation History',
            totalContributed: 'Total Contributed',
            loadingHistory: 'Loading your donation history...',
            dateTime: 'Date & Time',
            transactionId: 'Transaction ID',
            amount: 'Amount',
            noDonationsHistoryTitle: 'No Donations Yet',
            noDonationsHistoryMsg: 'You haven\'t made any donations yet. Start your journey of giving today!',

            // About Page
            aboutSchool: 'About Sri Vidya School',
            schoolSubtitle: 'Empowering children through education and values',
            schoolHistory: 'Our History',
            schoolHistoryText: 'Sri Vidya Primary School has been a beacon of learning for generations. Established with the vision of providing quality education to every child, our school nurtures talent and builds character in a supportive environment.',
            deity: 'Our Vision',
            deityText: 'We strive to cultivate an atmosphere of excellence where students are encouraged to reach their full potential. Our holistic approach combines academic rigor with moral grounding.',
            timings: 'School Timings',
            morningDarshan: 'Primary Section',
            eveningDarshan: 'Secondary Section',
            specialPuja: 'Office Hours',
            onRequest: 'By Appointment',
            location: 'Location',
            locationText: 'The school is located in a serene environment, easily accessible. Visit us to see our vibrant campus and meet our dedicated faculty.',
            viewOnMap: 'View on Map',
            schoolFeatures: 'School Facilities',
            dailyPuja: 'Smart Classes',
            dailyPujaDesc: 'Modern technology integrated learning',
            festivals: 'Sports & Arts',
            festivalsDesc: 'All-round development of students',
            prasadam: 'Digital Library',
            prasadamDesc: 'Vast resources for curious minds',
        }
    },
    kn: {
        translation: {
            // Layout
            dashboard: 'ಡ್ಯಾಶ್‌ಬೋರ್ಡ್',
            about: 'ನಮ್ಮ ಬಗ್ಗೆ',
            history: 'ಇತಿಹಾಸ',
            settings: 'ಸೆಟ್ಟಿಂಗ್‌ಗಳು',
            schoolName: 'ಶ್ರೀ ವಿದ್ಯಾ ಶಾಲೆ',
            signOut: 'ನಿರ್ಗಮಿಸಿ',

            // Dashboard
            welcome: 'ಸ್ವಾಗತ',
            greeting: 'ನಿಮ್ಮ ಕೊಡುಗೆ ನಮ್ಮ ವಿದ್ಯಾರ್ಥಿಗಳ ಭವಿಷ್ಯವನ್ನು ರೂಪಿಸಲು ಸಹಾಯ ಮಾಡುತ್ತದೆ.',
            totalDonations: 'ಒಟ್ಟು ದೇಣಿಗೆಗಳು',
            lastDonation: 'ಕೊನೆಯ ದೇಣಿಗೆ',
            noDonationsYet: 'ಇನ್ನೂ ಯಾವುದೇ ದೇಣಿಗೆ ಇಲ್ಲ',
            makeDonation: 'ದೇಣಿಗೆ ನೀಡಿ',
            donateNow: 'ಈಗಲೇ ದೇಣಿಗೆ ನೀಡಿ',
            recentDonations: 'ಇತ್ತೀಚಿನ ದೇಣಿಗೆಗಳು',
            noDonationsMessage: 'ಇನ್ನೂ ಯಾವುದೇ ದೇಣಿಗೆ ಇಲ್ಲ. ನಿಮ್ಮ ಮೊದಲ ದೇಣಿಗೆಯನ್ನು ನೀಡಿ!',

            // Donation Modal
            chooseAmount: 'ಮೊತ್ತವನ್ನು ಆಯ್ಕೆಮಾಡಿ ಮತ್ತು ಪಾವತಿಸಿ',
            processingPayment: 'ಪಾವತಿಯನ್ನು ಪ್ರಕ್ರಿಯೆಗೊಳಿಸಲಾಗುತ್ತಿದೆ',
            donationSuccessful: 'ದೇಣಿಗೆ ಯಶಸ್ವಿಯಾಗಿದೆ',
            donationAmount: 'ದೇಣಿಗೆ ಮೊತ್ತ',
            payUsing: 'ಇದರ ಮೂಲಕ ಪಾವತಿಸಿ',
            payUsingUpi: 'ಎಲ್ಲಾ UPI ಅಪ್ಲಿಕೇಶನ್‌ಗಳು / QR ಕೋಡ್',
            securedBy: 'RAZORPAY ಮೂಲಕ ಸುರಕ್ಷಿತವಾಗಿದೆ',
            qrNote: 'ಗಮನಿಸಿ: QR ಕೋಡ್‌ಗಾಗಿ, ಪಾವತಿ ವಿಂಡೋದಲ್ಲಿ "UPI" ಆಯ್ಕೆಮಾಡಿ',
            testModeNote: 'ಪರೀಕ್ಷೆಗಾಗಿ ದಯವಿಟ್ಟು ದೇಶೀಯ ಕಾರ್ಡ್‌ಗಳು ಅಥವಾ UPI ಬಳಸಿ.',
            contacting: 'ಸಂಪರ್ಕಿಸಲಾಗುತ್ತಿದೆ',
            securingPayment: 'ನಿಮ್ಮ ಪಾವತಿಯನ್ನು ಸುರಕ್ಷಿತಗೊಳಿಸಲಾಗುತ್ತಿದೆ ರೂ.',
            donationConfirmed: 'ದೇಣಿಗೆ ದೃಢೀಕರಿಸಲಾಗಿದೆ!',
            contributionMessage: 'ನಿಮ್ಮ ದೇಣಿಗೆ',
            processedSuccessfully: 'ಯಶಸ್ವಿಯಾಗಿ ಪಾವತಿಯಾಗಿದೆ',
            receiptId: 'ರಶೀದಿ ID',
            done: 'ಮುಗಿದಿದೆ',
            enterValidAmount: 'ದಯವಿಟ್ಟು ಮೊದಲು ಮಾನ್ಯವಾದ ಮೊತ್ತವನ್ನು ನಮೂದಿಸಿ',
            paymentInitFailed: 'ಪಾವತಿ ಪ್ರಾರಂಭ ವಿಫಲವಾಗಿದೆ',
            donationFailed: 'ದೇಣಿಗೆ ವಿಫಲವಾಗಿದೆ. ದಯವಿಟ್ಟು ಮತ್ತೆ ಪ್ರಯತ್ನಿಸಿ.',
            thankYou: 'ನಿಮ್ಮ ದೇಣಿಗೆಗಾಗಿ ಧನ್ಯವಾದಗಳು!',
            verificationFailed: 'ದೇಣಿಗೆಯನ್ನು ಪರಿಶೀಲಿಸಲು ವಿಫಲವಾಗಿದೆ. ದಯವಿಟ್ಟು ಬೆಂಬಲವನ್ನು ಸಂಪರ್ಕಿಸಿ.',

            // Settings
            notificationPreferences: 'ಅಧಿಸೂಚನೆ ಆದ್ಯತೆಗಳು',
            monthlyReminders: 'ಮಾಸಿಕ ದೇಣಿಗೆ ಜ್ಞಾಪನೆಗಳು',
            monthlyRemindersDesc: 'ನಿಮ್ಮ ಮಾಸಿಕ ದೇಣಿಗೆ ನೀಡಲು ಜ್ಞಾಪನೆಗಳನ್ನು ಸ್ವೀಕರಿಸಿ',
            smsReminders: 'SMS ಜ್ಞಾಪನೆಗಳು',
            smsRemindersDesc: 'ನಿಮ್ಮ ಮೊಬೈಲ್‌ನಲ್ಲಿ SMS ಮೂಲಕ ಜ್ಞಾಪನೆಗಳನ್ನು ಸ್ವೀಕರಿಸಿ',
            phoneNumber: 'ಜ್ಞಾಪನೆಗಳಿಗಾಗಿ ಫೋನ್ ಸಂಖ್ಯೆ',
            enterPhone: 'ನಿಮ್ಮ 10-ಅಂಕಿಯ ಮೊಬೈಲ್ ಸಂಖ್ಯೆಯನ್ನು ನಮೂದಿಸಿ',
            sendTestEmail: 'ಪರೀಕ್ಷಾ ಇಮೇಲ್ ಕಳುಹಿಸಿ',
            sendTestSms: 'ಪರೀಕ್ಷಾ SMS ಕಳುಹಿಸಿ',
            sending: 'ಕಳುಹಿಸಲಾಗುತ್ತಿದೆ...',
            note: 'ಸೂಚನೆ',
            noteDesc: 'ಸಕ್ರಿಯಗೊಳಿಸಿದಾಗ, ನಿಮ್ಮ ಕಳೆದ ದೇಣಿಗೆಯ ಒಂದು ತಿಂಗಳ ನಂತರ ನೀವು ಜ್ಞಾಪನೆ ಅಧಿಸೂಚನೆಯನ್ನು ಪಡೆಯುತ್ತೀರಿ. ಇದು ಶಾಲೆಗೆ ನಿಯಮಿತ ಕೊಡುಗೆಗಳನ್ನು ನೀಡಲು ಸಹಾಯ ಮಾಡುತ್ತದೆ.',
            saveChanges: 'ಬದಲಾವಣೆಗಳನ್ನು ಉಳಿಸಿ',
            settingsSaved: 'ಸೆಟ್ಟಿಂಗ್‌ಗಳನ್ನು ಯಶಸ್ವಿಯಾಗಿ ಉಳಿಸಲಾಗಿದೆ!',
            settingsSaveFailed: 'ಸೆಟ್ಟಿಂಗ್‌ಗಳನ್ನು ಉಳಿಸಲು ವಿಫಲವಾಗಿದೆ',
            language: 'ಭಾಷೆ',
            languageDesc: 'ನಿಮ್ಮ ಆದ್ಯತೆಯ ಭಾಷೆಯನ್ನು ಆಯ್ಕೆಮಾಡಿ',
            testSentMock: 'ಪರೀಕ್ಷಾ {{type}} MOCK ಮೋಡ್‌ನಲ್ಲಿ ಕಳುಹಿಸಲಾಗಿದೆ! ಸರ್ವರ್ ಕನ್ಸೋಲ್ ಪರಿಶೀಲಿಸಿ.',
            testSentSuccess: 'ಪರೀಕ್ಷಾ {{type}} ಯಶಸ್ವಿಯಾಗಿ ಕಳುಹಿಸಲಾಗಿದೆ! ನಿಮ್ಮ {{dest}} ಪರಿಶೀಲಿಸಿ.',
            testFailed: '{{type}} ಕಳುಹಿಸಲು ವಿಫಲವಾಗಿದೆ',

            // History
            donationHistory: 'ದೇಣಿಗೆ ಇತಿಹಾಸ',
            totalContributed: 'ಒಟ್ಟು ಕೊಡುಗೆ',
            loadingHistory: 'ನಿಮ್ಮ ದೇಣಿಗೆ ಇತಿಹಾಸವನ್ನು ಲೋಡ್ ಮಾಡಲಾಗುತ್ತಿದೆ...',
            dateTime: 'ದಿನಾಂಕ ಮತ್ತು ಸಮಯ',
            transactionId: 'ವಹಿವಾಟು ID',
            amount: 'ಮೊತ್ತ',
            noDonationsHistoryTitle: 'ಇನ್ನೂ ಯಾವುದೇ ದೇಣಿಗೆಗಳಿಲ್ಲ',
            noDonationsHistoryMsg: 'ನೀವು ಇನ್ನೂ ಯಾವುದೇ ದೇಣಿಗೆ ನೀಡಿಲ್ಲ. ಇಂದೇ ನಿಮ್ಮ ಕೊಡುಗೆಯನ್ನು ಪ್ರಾರಂಭಿಸಿ!',

            // About Page
            aboutSchool: 'ಶ್ರೀ ವಿದ್ಯಾ ಶಾಲೆಯ ಬಗ್ಗೆ',
            schoolSubtitle: 'ಶಿಕ್ಷಣ ಮತ್ತು ಮೌಲ್ಯಗಳ ಮೂಲಕ ಮಕ್ಕಳ ಸಬಲೀಕರಣ',
            schoolHistory: 'ನಮ್ಮ ಇತಿಹಾಸ',
            schoolHistoryText: 'ಶ್ರೀ ವಿದ್ಯಾ ಪ್ರಾಥಮಿಕ ಶಾಲೆಯು ತಲೆಮಾರುಗಳಿಂದ ಕಲಿಕೆಯ ಕೇಂದ್ರವಾಗಿದೆ. ಪ್ರತಿಯೊಬ್ಬ ಮಗುವಿಗೂ ಗುಣಮಟ್ಟದ ಶಿಕ್ಷಣವನ್ನು ನೀಡುವ ದೃಷ್ಟಿಯೊಂದಿಗೆ ಸ್ಥಾಪಿಸಲಾಗಿದೆ.',
            deity: 'ನಮ್ಮ ದೃಷ್ಟಿಕೋನ',
            deityText: 'ವಿದ್ಯಾರ್ಥಿಗಳು ತಮ್ಮ ಪೂರ್ಣ ಸಾಮರ್ಥ್ಯವನ್ನು ತಲುಪಲು ಪ್ರೋತ್ಸಾಹಿಸುವ ವಾತಾವರಣವನ್ನು ಸೃಷ್ಟಿಸಲು ನಾವು ಶ್ರಮಿಸುತ್ತೇವೆ.',
            timings: 'ಶಾಲೆಯ ಸಮಯ',
            morningDarshan: 'ಪ್ರಾಥಮಿಕ ವಿಭಾಗ',
            eveningDarshan: 'ಪ್ರೌಢ ವಿಭಾಗ',
            specialPuja: 'ಕಚೇರಿ ಸಮಯ',
            onRequest: 'ಮುನಿಯವಕ್ಕಿನ ಮೂಲಕ',
            location: 'ಸ್ಥಳ',
            locationText: 'ಶಾಲೆಯು ಶಾಂತ ವಾತಾವರಣದಲ್ಲಿದ್ದು, ಸುಲಭವಾಗಿ ತಲುಪಬಹುದು.',
            viewOnMap: 'ನಕ್ಷೆಯಲ್ಲಿ ನೋಡಿ',
            schoolFeatures: 'ಶಾಲೆಯ ಸೌಲಭ್ಯಗಳು',
            dailyPuja: 'ಸ್ಮಾರ್ಟ್ ತರಗತಿಗಳು',
            dailyPujaDesc: 'ಆಧುನಿಕ ತಂತ್ರಜ್ಞಾನ ಆಧಾರಿತ ಕಲಿಕೆ',
            festivals: 'ಕ್ರೀಡೆ ಮತ್ತು ಕಲೆ',
            festivalsDesc: 'ವಿದ್ಯಾರ್ಥಿಗಳ ಸರ್ವಾಂಗೀಣ ಅಭಿವೃದ್ಧಿ',
            prasadam: 'ಡಿಜಿಟಲ್ ಲೈಬ್ರರಿ',
            prasadamDesc: 'ವೈವಿಧ್ಯಮಯ ಜ್ಞಾನ ಸಂಪನ್ಮೂಲಗಳು',
        }
    }
};

i18n
    .use(LanguageDetector)
    .use(initReactI18next)
    .init({
        resources,
        fallbackLng: 'en',
        interpolation: {
            escapeValue: false // react already safes from xss
        }
    });

export default i18n;
