json.video do
    json.partial! 'api/videos/video', video: @video
    json.extract! @video, :description
    json.video_url url_for(@video.video_file)
end

json.user do
    json.partial! 'api/users/user', user: @video.author
end