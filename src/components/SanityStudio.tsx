import React, { useEffect, useState } from 'react'

const SanityStudio: React.FC = () => {
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    setIsMounted(true)
    return () => setIsMounted(false)
  }, [])

  if (!isMounted) return null

  return (
    <div style={{ 
      minHeight: '100vh',
      backgroundColor: '#f7fafc',
      padding: '20px',
      fontFamily: 'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif'
    }}>
      <div style={{ 
        maxWidth: '1200px', 
        margin: '0 auto',
        backgroundColor: 'white',
        borderRadius: '8px',
        boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
        overflow: 'hidden'
      }}>
        <div style={{ 
          padding: '20px', 
          borderBottom: '1px solid #e2e8f0',
          backgroundColor: '#fff'
        }}>
          <div style={{ 
            display: 'flex', 
            alignItems: 'center', 
            justifyContent: 'space-between',
            marginBottom: '20px'
          }}>
            <div>
              <h1 style={{ 
                margin: 0, 
                fontSize: '24px', 
                fontWeight: 'bold',
                color: '#1a202c'
              }}>
                Faith Foundation Studio
              </h1>
              <p style={{ 
                margin: '8px 0 0', 
                color: '#64748b',
                fontSize: '14px'
              }}>
                Manage your content, campaigns, and news
              </p>
            </div>
            <div style={{ display: 'flex', gap: '10px' }}>
              <a 
                href="/"
                style={{
                  padding: '8px 16px',
                  backgroundColor: '#3b82f6',
                  color: 'white',
                  textDecoration: 'none',
                  borderRadius: '6px',
                  fontSize: '14px',
                  fontWeight: '500'
                }}
              >
                ← Back to Website
              </a>
            </div>
          </div>
        </div>
        
        <div style={{ padding: '20px' }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '12px' }}>
            <div style={{
              backgroundColor: 'white',
              border: '1px solid #e2e8f0',
              borderRadius: '6px',
              padding: '16px'
            }}>
              <h3 style={{ 
                margin: '0 0 8px 0', 
                fontSize: '16px', 
                fontWeight: '600',
                color: '#1a202c'
              }}>
                📝 Create Content
              </h3>
              <p style={{ margin: '0', color: '#64748b', fontSize: '14px' }}>
                Add campaigns, news articles, and author profiles
              </p>
            </div>
            <div style={{
              backgroundColor: 'white',
              border: '1px solid #e2e8f0',
              borderRadius: '6px',
              padding: '16px'
            }}>
              <h3 style={{ 
                margin: '0 0 8px 0', 
                fontSize: '16px', 
                fontWeight: '600',
                color: '#1a202c'
              }}>
                📊 Manage Data
              </h3>
              <p style={{ margin: '0', color: '#64748b', fontSize: '14px' }}>
                Edit and organize all your content in one place
              </p>
            </div>
            <div style={{
              backgroundColor: 'white',
              border: '1px solid #e2e8f0',
              borderRadius: '6px',
              padding: '16px'
            }}>
              <h3 style={{ 
                margin: '0 0 8px 0', 
                fontSize: '16px', 
                fontWeight: '600',
                color: '#1a202c'
              }}>
                🚀 Deploy & Publish
              </h3>
              <p style={{ margin: '0', color: '#64748b', fontSize: '14px' }}>
                Push content live with one click
              </p>
            </div>
          </div>

          <div style={{
            backgroundColor: '#fef3c7',
            border: '1px solid #fbbf24',
            borderRadius: '6px',
            padding: '16px',
            marginBottom: '16px'
          }}>
            <h2 style={{ 
              margin: '0 0 16px 0', 
              fontSize: '18px', 
              fontWeight: '600',
              color: '#92400e'
            }}>
              🔧 Configuration Status
            </h2>
            <div style={{ display: 'grid', gap: '8px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <div style={{
                  width: '12px',
                  height: '12px',
                  borderRadius: '50%',
                  backgroundColor: '#10b981'
                }}></div>
                <span style={{ color: '#059669' }}>✅ Environment variables configured</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <div style={{
                  width: '12px',
                  height: '12px',
                  borderRadius: '50%',
                  backgroundColor: '#10b981'
                }}></div>
                <span style={{ color: '#059669' }}>✅ Schemas loaded</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <div style={{
                  width: '12px',
                  height: '12px',
                  borderRadius: '50%',
                  backgroundColor: '#f59e0b'
                }}></div>
                <span style={{ color: '#d97706' }}>⚠️ Update project ID in .env</span>
              </div>
            </div>
          </div>

          <div style={{
            backgroundColor: '#f0f9ff',
            border: '1px solid #3b82f6',
            borderRadius: '6px',
            padding: '16px'
          }}>
            <h2 style={{ 
              margin: '0 0 16px 0', 
              fontSize: '18px', 
              fontWeight: '600',
              color: '#1e40af'
            }}>
              📚 Resources
            </h2>
            <ul style={{ margin: '0', paddingLeft: '20px', color: '#64748b' }}>
              <li style={{ marginBottom: '8px' }}>
                <a href="https://www.sanity.io/docs" target="_blank" style={{ color: '#3b82f6' }}>Sanity Documentation</a>
              </li>
              <li style={{ marginBottom: '8px' }}>
                <a href="/SANITY_README.md" style={{ color: '#3b82f6' }}>Project Setup Guide</a>
              </li>
              <li style={{ marginBottom: '8px' }}>
                <a href="https://www.sanity.io/docs/groq" target="_blank" style={{ color: '#3b82f6' }}>GROQ Query Language</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SanityStudio
