class Video < ApplicationRecord
    validates :title, :view_counts, presence: true

    belongs_to :author,
        primary_key: :id,
        foreign_key: :author_id,
        class_name: :User

    has_one_attached :video_file
    has_one_attached :thumbnail
end
