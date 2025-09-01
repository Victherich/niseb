import React, { useState } from 'react';
import { Fade, Slide } from 'react-awesome-reveal';

// This is the main App component that contains the entire form.
const QuizFormPage = () => {
    // State to manage the form data. A simple object to hold all input values.
    const [formData, setFormData] = useState({
        institutionName: '',
        facilitatorName: '',
        nisebMember: '',
        facilitatorDept: '',
        facilitatorEmail: '',
        facilitatorPhone: '',
        nominees: '',
        interest: ''
    });

    // State for the submission message box.
    const [message, setMessage] = useState('');
    const [isSuccess, setIsSuccess] = useState(false);

    // This function handles changes to any form input field.
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevData => ({
            ...prevData,
            [name]: value
        }));
    };

    // This function is called when the form is submitted.
    const handleSubmit = (e) => {
        e.preventDefault();

        // In a real application, you would send the formData to a server here.
        // For this example, we'll just simulate a successful submission and display a message.
        console.log('Form data:', formData);

        // Set the success message and show the message box.
        setMessage('Thank you for your submission! Your enrolment form has been received.');
        setIsSuccess(true);

        // Reset the form fields after a short delay for a better user experience.
        setTimeout(() => {
            setFormData({
                institutionName: '',
                facilitatorName: '',
                nisebMember: '',
                facilitatorDept: '',
                facilitatorEmail: '',
                facilitatorPhone: '',
                nominees: '',
                interest: ''
            });
            setIsSuccess(false);
            setMessage('');
        }, 5000);
    };

    // A style object to replace Tailwind CSS classes, keeping the code clean.
    const styles = {
        container: {
            fontFamily: 'sans-serif',
            // Changed background to a soft, light orange.
            backgroundColor: 'rgba(255, 165, 0, 0.5)',
            minHeight: '100vh',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            // padding: '1rem',
            padding:"100px 10px",
        },
        formBox: {
            backgroundColor: 'rgba(255,255,255,0.9)',
            borderRadius: '1rem', // 16px
            boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
            maxWidth: '56rem', // 896px
            width: '100%',
            padding: '3rem', // 48px
            display: 'flex',
            flexDirection: 'column',
            gap: '2rem', // 32px
        },
        header: {
            textAlign: 'center',
        },
        h1: {
            fontSize: '2.25rem', // 36px
            fontWeight: 'bold',
            // Changed header color to a pure, deep green.
            color: '#008000',
            marginBottom: '0.5rem',
        },
        h2: {
            fontSize: '1.25rem', // 20px
            fontWeight: '500',
            // Changed subheading color to a vibrant orange.
            color: '#FFA500',
            marginBottom: '1rem',
        },
        prose: {
            color: '#4b5563',
            fontSize: '0.875rem', // 14px
            lineHeight: '1.75rem',
            textAlign: 'left',
            marginBottom: '1rem',
        },
        requiredNote: {
            color: '#6b7280', // Gray-500
            fontSize: '0.875rem', // 14px
            fontStyle: 'italic',
        },
        formSectionTitle: {
            fontSize: '1.25rem', // 20px
            fontWeight: '600',
            // Changed section title color to a pure green.
            color: '#008000',
            borderBottom: '1px solid #d1d5db',
            paddingBottom: '0.5rem',
            marginBottom: '1rem',
        },
        input: {
            width: '100%',
            padding: '0.75rem',
            border: '1px solid #d1d5db',
            borderRadius: '0.5rem', // 8px
            outline: 'none',
            transition: 'border-color 0.2s, box-shadow 0.2s',
        },
        inputFocus: {
            // Changed focus border color to a pure orange.
            borderColor: '#FFA500',
            // Changed focus shadow to an orange glow.
            boxShadow: '0 0 0 2px rgba(255, 165, 0, 0.5)',
        },
        label: {
            display: 'block',
            fontSize: '0.875rem',
            fontWeight: '500',
            color: '#374151',
            marginBottom: '0.25rem',
        },
        radioGroup: {
            display: 'flex',
            alignItems: 'center',
            gap: '1rem',
            marginTop: '0.5rem',
        },
        radioLabel: {
            display: 'inline-flex',
            alignItems: 'center',
            color: '#374151',
        },
        radioInput: {
            // Changed radio button color to a pure green.
            accentColor: '#008000',
        },
        submitButton: {
            width: '100%',
            padding: '0.75rem 2rem',
            // Changed button color to a pure green.
            backgroundColor: '#008000',
            color: 'white',
            fontWeight: '600',
            borderRadius: '9999px', // Full rounded
            boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
            transition: 'background-color 0.2s',
            cursor: 'pointer',
            outline: 'none',
            border:"none",
            // Added hover effect with a darker green.
            ':hover': {
                backgroundColor: '#006400',
            },
        },
        messageBox: {
            // Changed success message box to pure green shades.
            backgroundColor: '#E6FFE6',
            border: '1px solid #008000',
            color: '#006400',
            padding: '0.75rem 1rem',
            borderRadius: '0.5rem',
            position: 'relative',
        }
    };

    return (
        // The Fade animation now has a slower duration for smoothness.
        <div style={styles.container}>
            <Fade duration={2000} triggerOnce>
                <div style={styles.formBox}>
                    {/* Header Section */}
                    <header style={styles.header}>
                        <h1 style={styles.h1}>Enrolment Form for Quiz Competition (2025)</h1>
                        <h2 style={styles.h2}>Organized by Society for Experimental Biology of Nigeria (NISEB)</h2>
                        <div style={styles.prose}>
                            <p>
                                The Society for Experimental Biology of Nigeria (NISEB) is a body of researchers focused on training and bringing together skillful hands in Experimental Biology and related fields all over Nigeria and beyond. Our society is concerned with the technological advancement of our nation which has been directly associated with impactful scientific discoveries and training of the younger generation on experimental biology.
                            </p>
                            <p>
                                NISEB was formed (as Bioscience Study Group) on Monday, April 3, 1989, in the Department of Biochemistry, University of Ilorin. To date, NISEB has hosted 23 annual scientific conferences and general meetings across Universities in Nigeria and boasts of over 1,700 registered members.
                            </p>
                            <p>
                                As part of our development program for younger scientists, we announce the call for enrolment for our NATIONAL QUIZ COMPETITION FOR 2025. The competition will feature participants across Higher institutions within the six geopolitical zones in Nigeria. Undergraduate students from 300-400L in Biochemistry, Biotechnology, Molecular Genetics, Microbiology, Cell Biology, Zoology, Animal Science, Anatomy, Physiology, Plant/Crop science and all other related Experimental Biology Programs nominated by an institutional staff facilitator (preferably a member of NISEB) will be eligible to participate.
                            </p>
                            <p>
                                The first-third rounds of the competition will take place virtually from January 2025 and the six winners (2 candidates each) for each geopolitical zone will represent their institution at the final competition which will take place prior to the opening ceremonies at the Annual Conference and General Meetings of NISEB for 2025. A total of twelve students will compete for the first, second and third positions, while the school that comes first will be awarded the trophy during the conference.
                            </p>
                        </div>
                        <div style={styles.requiredNote}>
                            <p>* Indicates a required question</p>
                        </div>
                    </header>

                    {/* The Form Itself */}
                    <form onSubmit={handleSubmit}>

                        {/* Submission Message Box */}
                        {isSuccess && (
                            <div style={styles.messageBox} role="alert">
                                <span style={{ display: 'block' }}>{message}</span>
                            </div>
                        )}

                        {/* Institution & Geopolitical Zone */}
                        {/* The Slide animation now has a slower duration for smoothness. */}
                        <Slide direction="right" duration={1000}>
                            <div style={{ marginBottom: '1.5rem' }}>
                                <label htmlFor="institutionName" style={styles.label}>Name of Institution and geopolitical zone represented <span style={{ color: '#ef4444' }}>*</span></label>
                                <input
                                    type="text"
                                    id="institutionName"
                                    name="institutionName"
                                    value={formData.institutionName}
                                    onChange={handleChange}
                                    style={styles.input}
                                    required
                                />
                            </div>
                        </Slide>

                        {/* Staff Facilitator Information Section */}
                        {/* The Slide animation now has a slower duration for smoothness. */}
                        <Slide direction="right" duration={1000} delay={200}>
                            <div style={{ marginBottom: '1.5rem' }}>
                                <h3 style={styles.formSectionTitle}>Institutional Staff Facilitator Information</h3>
                                
                                <div style={{ marginBottom: '1rem' }}>
                                    <label htmlFor="facilitatorName" style={styles.label}>Name of Institutional staff facilitator <span style={{ color: '#ef4444' }}>*</span></label>
                                    <input
                                        type="text"
                                        id="facilitatorName"
                                        name="facilitatorName"
                                        value={formData.facilitatorName}
                                        onChange={handleChange}
                                        style={styles.input}
                                        required
                                    />
                                </div>
                                
                                <div style={{ marginBottom: '1rem' }}>
                                    <label style={styles.label}>Are you a member of NISEB? <span style={{ color: '#ef4444' }}>*</span></label>
                                    <div style={styles.radioGroup}>
                                        <label style={styles.radioLabel}>
                                            <input
                                                type="radio"
                                                name="nisebMember"
                                                value="yes"
                                                checked={formData.nisebMember === 'yes'}
                                                onChange={handleChange}
                                                style={styles.radioInput}
                                                required
                                            />
                                            <span style={{ marginLeft: '0.5rem', color: '#374151' }}>Yes</span>
                                        </label>
                                        <label style={styles.radioLabel}>
                                            <input
                                                type="radio"
                                                name="nisebMember"
                                                value="no"
                                                checked={formData.nisebMember === 'no'}
                                                onChange={handleChange}
                                                style={styles.radioInput}
                                                required
                                            />
                                            <span style={{ marginLeft: '0.5rem', color: '#374151' }}>No</span>
                                        </label>
                                    </div>
                                </div>

                                <div style={{ marginBottom: '1rem' }}>
                                    <label htmlFor="facilitatorDept" style={styles.label}>Department/Program of Institutional staff facilitator <span style={{ color: '#ef4444' }}>*</span></label>
                                    <input
                                        type="text"
                                        id="facilitatorDept"
                                        name="facilitatorDept"
                                        value={formData.facilitatorDept}
                                        onChange={handleChange}
                                        style={styles.input}
                                        required
                                    />
                                </div>
                                
                                <div style={{ marginBottom: '1rem' }}>
                                    <label htmlFor="facilitatorEmail" style={styles.label}>Email address of Institutional staff facilitator <span style={{ color: '#ef4444' }}>*</span></label>
                                    <input
                                        type="email"
                                        id="facilitatorEmail"
                                        name="facilitatorEmail"
                                        value={formData.facilitatorEmail}
                                        onChange={handleChange}
                                        style={styles.input}
                                        required
                                    />
                                </div>

                                <div style={{ marginBottom: '1rem' }}>
                                    <label htmlFor="facilitatorPhone" style={styles.label}>Phone number of Institutional staff facilitator <span style={{ color: '#ef4444' }}>*</span></label>
                                    <input
                                        type="tel"
                                        id="facilitatorPhone"
                                        name="facilitatorPhone"
                                        value={formData.facilitatorPhone}
                                        onChange={handleChange}
                                        style={styles.input}
                                        required
                                    />
                                </div>
                            </div>
                        </Slide>

                        {/* Student Nominees & Interest */}
                        {/* The Slide animation now has a slower duration for smoothness. */}
                        <Slide direction="right" duration={1000} delay={400}>
                            <div style={{ marginBottom: '1.5rem' }}>
                                <h3 style={styles.formSectionTitle}>Student Nominees & Interest</h3>

                                <div style={{ marginBottom: '1rem' }}>
                                    <label htmlFor="nominees" style={styles.label}>Name and contact information of two student nominees <span style={{ color: '#ef4444' }}>*</span></label>
                                    <textarea
                                        id="nominees"
                                        name="nominees"
                                        rows="4"
                                        value={formData.nominees}
                                        onChange={handleChange}
                                        style={styles.input}
                                        placeholder="e.g., Jane Doe, 123-456-7890, jane.doe@school.edu; John Smith, 098-765-4321, john.smith@school.edu"
                                        required
                                    ></textarea>
                                </div>
                                
                                <div style={{ marginBottom: '1rem' }}>
                                    <label htmlFor="interest" style={styles.label}>Why are you interested in this competition? <span style={{ color: '#ef4444' }}>*</span></label>
                                    <textarea
                                        id="interest"
                                        name="interest"
                                        rows="6"
                                        value={formData.interest}
                                        onChange={handleChange}
                                        style={styles.input}
                                        required
                                    ></textarea>
                                </div>
                            </div>
                        </Slide>

                        {/* Submit Button */}
                        {/* The Fade animation now has a slower duration for smoothness. */}
                        <Fade duration={2000} delay={800}>
                            <div style={{ textAlign: 'center' }}>
                                <button
                                    type="submit"
                                    style={styles.submitButton}
                                >
                                    Submit Enrolment
                                </button>
                            </div>
                        </Fade>

                    </form>
                </div>
            </Fade>
        </div>
    );
};

export default QuizFormPage;