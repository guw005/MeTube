class Api::VideosController < ApplicationController
    def index
        @videos = Video.all.includes(:author)

        render 'api/videos/index'
    end

    def show
        @video = Video.find(params[:id])
        
        if @video
            @video.view_counts += 1
            @video.save
            render 'api/videos/show'
        else
            render json: @video.errors.full_messages, status: 422
        end
    end

    def create
        @video = Video.new(video_params)
        @video.author_id = current_user.id
        
        if @video.save
            render 'api/videos/show'
        else
            render json: @video.errors.full_messages, status: 422
        end
    end

    def update
        @video = current_user.videos.find(params[:id])

        if @video.update(video_params)
            render 'api/videos/show'
        else
            render json: @video.errors.full_messages, status: 422
        end
    end

    def destroy
        @video = current_user.videos.find(params[:id])

        @video.destory
        render 'api/videos/index'
    end

    private
    def video_params
        params.require(:video).permit(:title, :description, :video_file, :thumbnail)
    end
end
