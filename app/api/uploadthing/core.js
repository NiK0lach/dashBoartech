import { createUploadthing } from "uploadthing/next";

const f = createUploadthing();

// FileRouter for your app, can contain multiple FileRoutes
export const ourFileRouter = {
  // Define as many FileRoutes as you like, each with a unique routeSlug
  categoryImageUploader: f({ image: { maxFileSize: "1MB" } })
    // Set permissions and file types for this FileRoute
    .onUploadComplete(async ({ metadata, file }) => {
      console.log("file url", file.url, metadata);
      return { uploadedBy: "nik"};
    }),
     // Define as many FileRoutes as you like, each with a unique routeSlug
     bannerImageUploader: f({ image: { maxFileSize: "2MB" } })
  // Set permissions and file types for this FileRoute
  .onUploadComplete(async ({ metadata, file }) => {
    console.log("file url", file.url, metadata);
    return { uploadedBy: "nik"};
  }),
   // Define as many FileRoutes as you like, each with a unique routeSlug
   storesLogoUploader: f({ image: { maxFileSize: "1MB" } })
   // Set permissions and file types for this FileRoute
   .onUploadComplete(async ({ metadata, file }) => {
     console.log("file url", file.url, metadata);
     return { uploadedBy: "nik"};
   }),
   // Define as many FileRoutes as you like, each with a unique routeSlug
   productImageUploader: f({ image: { maxFileSize: "2MB" } })
   // Set permissions and file types for this FileRoute
   .onUploadComplete(async ({ metadata, file }) => {
     console.log("file url", file.url, metadata);
     return { uploadedBy: "nik"};
   }),
    // Define as many FileRoutes as you like, each with a unique routeSlug
    trainingImageUploader: f({ image: { maxFileSize: "1MB" } })
    // Set permissions and file types for this FileRoute
    .onUploadComplete(async ({ metadata, file }) => {
      console.log("file url", file.url, metadata);
      return { uploadedBy: "nik"};
    }),
      // Define as many FileRoutes as you like, each with a unique routeSlug
      supplierLogoUploader: f({ image: { maxFileSize: "1MB" } })
      // Set permissions and file types for this FileRoute
      .onUploadComplete(async ({ metadata, file }) => {
        console.log("file url", file.url, metadata);
        return { uploadedBy: "nik"};
      }),
};

