import Link from "next/link";
import { products } from "@/lib/products";

export default function DownloadPage() {
  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-center mb-4">Your Downloads</h1>
        <p className="text-gray-600 text-center mb-12">
          Access your purchased digital products below
        </p>

        <div className="bg-white rounded-lg shadow-md p-6 mb-6">
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-6">
            <p className="text-sm text-blue-800">
              <strong>Note:</strong> This is a demo page. In a real application, downloads would be
              authenticated and linked to your purchase history.
            </p>
          </div>

          <div className="space-y-4">
            {products.map((product) => (
              <div
                key={product.id}
                className="border border-gray-200 rounded-lg p-4 flex items-center justify-between hover:border-blue-300 transition-colors"
              >
                <div>
                  <h3 className="font-semibold text-lg">{product.title}</h3>
                  <p className="text-sm text-gray-600">{product.description}</p>
                </div>
                <button
                  onClick={() => alert(`Download would start for: ${product.title}`)}
                  className="bg-blue-600 text-white py-2 px-4 rounded-lg font-semibold hover:bg-blue-700 transition-colors whitespace-nowrap ml-4"
                >
                  Download
                </button>
              </div>
            ))}
          </div>
        </div>

        <div className="text-center">
          <Link
            href="/"
            className="inline-block bg-gray-100 text-gray-700 py-3 px-6 rounded-lg font-semibold hover:bg-gray-200 transition-colors"
          >
            Back to Store
          </Link>
        </div>
      </div>
    </div>
  );
}
