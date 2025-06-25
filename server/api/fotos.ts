import { S3Client, GetObjectCommand } from '@aws-sdk/client-s3'
import { getSignedUrl } from '@aws-sdk/s3-request-presigner'

export default defineEventHandler(async (event) => {
  const type = getQuery(event).type as string || 'catering'

  const client = new S3Client({
    endpoint: process.env.MINIO_ENDPOINT || 'http://localhost:9000',
    region: 'us-east-1',
    credentials: {
      accessKeyId: process.env.MINIO_ACCESS_KEY || 'minioadmin',
      secretAccessKey: process.env.MINIO_SECRET_KEY || 'minioadmin'
    },
    forcePathStyle: true
  })

  const bucket = process.env.MINIO_BUCKET || 'catering-fotos'

  // In werkelijkheid zouden we de object keys uit de bucket halen
  const filenames = ['foto1.jpg', 'foto2.jpg', 'foto3.jpg']

  const fotos = await Promise.all(
    filenames.map(async (name) => {
      const command = new GetObjectCommand({ Bucket: bucket, Key: `${type}/${name}` })
      return getSignedUrl(client, command, { expiresIn: 60 * 60 })
    })
  )

  return { fotos }
})
