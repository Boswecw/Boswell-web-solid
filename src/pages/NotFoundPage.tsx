import Navbar from '../components/Navbar'
import SEOHead from '../components/SEOHead'
import LinkButton from '../components/LinkButton'

export default function NotFoundPage() {
  return (
    <>
      <SEOHead
        title="Page Not Found | Boswell Digital Solutions LLC"
        description="The page you're looking for doesn't exist. Return to Boswell Digital Solutions."
        url="https://boswelldigitalsolutions.com/404"
      />

      <div class="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-black text-white">
        <Navbar />
        
        <div class="pt-24 p-6 flex items-center justify-center min-h-[calc(100vh-96px)]">
          <div class="max-w-2xl mx-auto text-center">
            <div class="mb-8">
              <h1 class="text-9xl md:text-[150px] font-bold bg-gradient-to-r from-blue-400 via-white to-blue-400 bg-clip-text text-transparent mb-4">
                404
              </h1>
              <h2 class="text-4xl md:text-5xl font-bold mb-4">
                Page Not Found
              </h2>
              <p class="text-xl text-gray-300 mb-8">
                Sorry, the page you're looking for doesn't exist or has been moved.
              </p>
            </div>

            <div class="bg-gray-800/50 rounded-xl p-8 border border-gray-700 mb-8">
              <p class="text-gray-300 mb-6">
                Let's get you back on track. Here are some helpful links:
              </p>
              <div class="flex flex-col sm:flex-row gap-4 justify-center">
                <LinkButton href="/" size="lg">
                  ← Back to Home
                </LinkButton>
                <LinkButton href="/portfolio" variant="outline" size="lg">
                  View Portfolio
                </LinkButton>
                <LinkButton href="/contact" variant="outline" size="lg">
                  Contact Us
                </LinkButton>
              </div>
            </div>

            <div class="text-gray-400">
              <p class="mb-2">Need help? Reach out to us:</p>
              <a 
                href="mailto:charlesboswell@boswelldigitalsolutions.com"
                class="text-blue-400 hover:text-blue-300 transition-colors"
              >
                charlesboswell@boswelldigitalsolutions.com
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

