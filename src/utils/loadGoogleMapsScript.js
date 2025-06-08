export const loadGoogleMapsScript = () => {
    return new Promise((resolve, reject) => {
        if (window.google) {
            console.log('Google Maps already loaded');
            resolve(window.google);
            return;
        }

        const script = document.createElement('script');
        script.src = `https://maps.googleapis.com/maps/api/js?key=${import.meta.env.VITE_GOOGLE_MAPS_API_KEY}&libraries=places`;
        script.async = true;
        script.defer = true;

        script.onload = () => {
            console.log('Google Maps script loaded successfully');
            resolve(window.google);
        };

        script.onerror = (error) => {
            console.error('Error loading Google Maps script:', error);
            reject(error);
        };

        document.head.appendChild(script);
    });
};